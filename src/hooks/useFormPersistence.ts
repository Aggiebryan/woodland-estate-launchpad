import { useState, useEffect } from 'react';
import { toast } from "@/components/ui/use-toast";
import { useAuth } from './use-auth';

export function useFormPersistence<T>(key: string, initialState: T) {
  const [data, setData] = useState<T>(initialState);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const { user } = useAuth();

  // Create a user specific key for storage
  const userSpecificKey = user ? `${key}_${user.uid}` : null;

  // Load data on initial render and when user changes
  useEffect(() => {
    console.log("useFormPersistence effect running with user:", user);
    
    // Always set initial state first to avoid undefined data
    setData(initialState);
    
    if (userSpecificKey) {
      setIsLoading(true);
      try {
        // Attempt to load saved form data
        const savedData = localStorage.getItem(userSpecificKey);
        
        if (savedData) {
          console.log("Found saved data for key:", userSpecificKey);
          try {
            const parsed = JSON.parse(savedData);
            
            if (parsed && typeof parsed === 'object') {
              console.log("Successfully parsed saved form data");
              setData({ ...initialState, ...parsed.data });
              
              if (parsed.timestamp) {
                setLastSaved(new Date(parsed.timestamp));
              }
            }
          } catch (parseError) {
            console.error("Error parsing saved form data:", parseError);
            // Keep using initialState that was already set
          }
        }
      } catch (e) {
        console.error("Error loading saved form data:", e);
        // Keep using initialState that was already set
      } finally {
        setIsLoading(false);
      }
    } else {
      console.log("No user specific key, using initial state");
      setIsLoading(false);
    }
  }, [userSpecificKey, initialState]);

  // Method to persist data
  const persistData = () => {
    if (userSpecificKey) {
      try {
        const dataToSave = {
          data,
          timestamp: new Date().toISOString()
        };
        
        localStorage.setItem(userSpecificKey, JSON.stringify(dataToSave));
        setLastSaved(new Date());
        
        toast({
          title: "Form saved",
          description: "Your form progress has been saved",
        });
        
        return true;
      } catch (e) {
        console.error("Error saving form data:", e);
        
        toast({
          title: "Save failed",
          description: "There was an error saving your form progress",
          variant: "destructive",
        });
        
        return false;
      }
    }
    return false;
  };

  return {
    data,
    updateData: setData,
    persistData,
    lastSaved,
    isLoading
  };
}
