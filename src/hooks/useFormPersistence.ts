
import { useState, useEffect } from 'react';
import { toast } from "@/components/ui/use-toast";
import { useAuth } from './use-auth';

export function useFormPersistence<T>(formKey: string, initialState: T) {
  const { user } = useAuth();
  const [data, setData] = useState<T>(initialState);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const userSpecificKey = user ? `${formKey}_${user.id}` : null;

  // Load saved data when user logs in
  useEffect(() => {
    if (userSpecificKey) {
      setIsLoading(true);
      try {
        const savedData = localStorage.getItem(userSpecificKey);
        if (savedData) {
          const { data, timestamp } = JSON.parse(savedData);
          setData(data);
          setLastSaved(new Date(timestamp));
        }
      } catch (e) {
        console.error("Error loading saved form data:", e);
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  }, [userSpecificKey]);

  const saveData = (newData: T) => {
    if (!userSpecificKey) {
      return false;
    }
    
    try {
      const timestamp = new Date().toISOString();
      localStorage.setItem(
        userSpecificKey, 
        JSON.stringify({ 
          data: newData, 
          timestamp 
        })
      );
      setLastSaved(new Date(timestamp));
      return true;
    } catch (e) {
      console.error("Error saving form data:", e);
      return false;
    }
  };

  const updateData = (newData: T) => {
    setData(newData);
  };

  const persistData = () => {
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
