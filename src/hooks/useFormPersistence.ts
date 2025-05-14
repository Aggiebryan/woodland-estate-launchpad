
import { useState, useEffect } from 'react';
import { toast } from "@/components/ui/use-toast";
import { useAuth } from './use-auth';

export function useFormPersistence<T>(formKey: string, initialState: T) {
  const { user } = useAuth();
  const [data, setData] = useState<T>(initialState);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const userSpecificKey = user ? `${formKey}_${user.id}` : null;

  // Added console log for debugging
  console.log("useFormPersistence initialized with:", { userSpecificKey, user, initialState });

  // Load saved data when user logs in
  useEffect(() => {
    console.log("useFormPersistence effect running with user:", user);
    
    if (userSpecificKey) {
      setIsLoading(true);
      try {
        const savedData = localStorage.getItem(userSpecificKey);
        console.log("Loaded saved data from localStorage:", savedData);
        
        if (savedData) {
          try {
            const parsed = JSON.parse(savedData);
            console.log("Parsed saved data:", parsed);
            
            if (parsed && parsed.data) {
              setData(parsed.data);
              if (parsed.timestamp) {
                setLastSaved(new Date(parsed.timestamp));
              }
            } else {
              console.warn("Saved data exists but has invalid format, using initial state");
              setData(initialState);
            }
          } catch (parseError) {
            console.error("Error parsing saved form data:", parseError);
            setData(initialState);
          }
        } else {
          // No saved data, use initial state
          console.log("No saved data found, using initial state");
          setData(initialState);
        }
      } catch (e) {
        console.error("Error loading saved form data:", e);
        setData(initialState);
      } finally {
        setIsLoading(false);
      }
    } else {
      console.log("No user specific key, using initial state");
      setData(initialState);
      setIsLoading(false);
    }
  }, [userSpecificKey, initialState]);

  const saveData = (newData: T) => {
    if (!userSpecificKey) {
      console.warn("Cannot save data - no user is logged in");
      return false;
    }
    
    try {
      const timestamp = new Date().toISOString();
      const dataToSave = {
        data: newData,
        timestamp
      };
      
      console.log("Saving data to localStorage:", dataToSave);
      localStorage.setItem(userSpecificKey, JSON.stringify(dataToSave));
      setLastSaved(new Date(timestamp));
      return true;
    } catch (e) {
      console.error("Error saving form data:", e);
      return false;
    }
  };

  const updateData = (newData: T) => {
    console.log("Updating form data:", newData);
    setData(newData);
  };

  const persistData = () => {
    console.log("Persisting current data:", data);
    if (saveData(data)) {
      toast({
        title: "Progress Saved",
        description: "Your form progress has been saved.",
      });
      return true;
    } else {
      toast({
        title: "Save Failed",
        description: "There was a problem saving your progress.",
        variant: "destructive"
      });
      return false;
    }
  };

  return {
    data,
    updateData,
    persistData,
    lastSaved,
    isLoading,
  };
}
