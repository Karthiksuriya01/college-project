import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { date, z } from 'zod';
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
  end_date: z.string(),
  link: z.string().min(1, { message: 'Link is required' }),
  status: z.enum(['pending', 'completed'])
});

const CreateEventpage = () => {
  const { userId } = useAuth();
  const navigate = useNavigate();

  const { data: add_event_data, loading: add_event_loading, error, fn: add_event_func } = useFetch(addEvent);

  const onsubmit = (data: z.infer<typeof formschema>) => {
    const eventData = {
      title: data.title,
      description: data.description,
      end_date: new Date(data.end_date).toISOString(), // Convert to ISO string
      link: data.link,
      status: data.status,
      created_by: userId
    };
    
    console.log('Form data:', eventData);
    add_event_func(eventData);
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
      link: '',
      status: 'pending',
      end_date: ''
    },
    resolver: zodResolver(formschema)
  });

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onsubmit)}>
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
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
      <h1>Event page created</h1>
    </div>
  );
};

export default CreateEventpage;
