import { User } from "./User";

export interface Post {
    author: User | null,
    comments: Post[],
    content: string,
    creationDate: string,
    parentId: string | null,
    id: string,
}