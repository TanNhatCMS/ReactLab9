export type Profiles = {
  id: number
  name: string
  username: string
  email: string
}
export interface UserProps {
  data: Array<{ id: number; [key: string]: any }>
}
