import { User } from "./User";

export interface Post {
    author: User,
    comments: Post[],
    content: string,
    creationDate: string,
    parentId: string | null,
    id: string,
}