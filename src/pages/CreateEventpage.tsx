import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addEvent } from '@/api/apiEvents';
import useFetch from '@/hook/useFetch';
import { useAuth } from '@clerk/clerk-react';
import { Textarea } from '@/components/ui/textarea';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const formschema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
  end_date: z.string()
    .min(1, { message: 'End date is required' })
    .refine((date) => new Date(date) >= new Date(new Date().setHours(0, 0, 0, 0)), {
      message: "End date must be today or in the future"
    }),
  link: z.string().min(1, { message: 'Link is required' }),
  status: z.enum(['pending', 'completed'])
});

const CreateEventpage = () => {
  const { userId } = useAuth();
  const navigate = useNavigate();

  const { data: add_event_data, loading: add_event_loading, error, fn: add_event_func } = useFetch(addEvent);

  const onsubmit = async (data: z.infer<typeof formschema>) => {
    try {
      const eventData = {
        title: data.title,
        description: data.description,
        end_date: new Date(data.end_date).toISOString().split('T')[0], // Format as YYYY-MM-DD
        link: data.link,
        status: 'pending', // Default to pending
        created_by: userId
      };
      
      console.log('Form data:', eventData);
      const result = await add_event_func(eventData);
      if (result) {
        navigate('/home');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  useEffect(() => {
    if (add_event_data?.length > 0) {
      navigate('/home');
    }
  }, [add_event_data]);



  const form = useForm<z.infer<typeof formschema>>({
    defaultValues: {
      title: '',
      description: '',
      end_date: new Date().toISOString().split('T')[0], // Today's date as default
      link: '',
      status: 'pending',
    },
    resolver: zodResolver(formschema)
  });

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Create New Event</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onsubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="end_date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>End Date</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    min={new Date().toISOString().split('T')[0]} // Can't select past dates
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='link'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Link</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {error instanceof Error && (
            <div className="text-red-500 text-sm">
              {error.message || 'An error occurred while creating the event'}
            </div>
          )}
          <Button 
            type="submit" 
            disabled={add_event_loading}
            className="w-full"
          >
            {add_event_loading ? 'Creating...' : 'Create Event'}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateEventpage;
