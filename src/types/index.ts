export interface Event {
    id: number
    created_at: string
    title: string
    description: string
    status: string
    link: string
    user_id: string
  }
  
  export interface Completed {
    id: number
    created_at: string
    user_id: string
    event_id: number
  }