import z from "zod"

export const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()

})

// type interface in zod 
export type SignupInput = z.infer<typeof signupInput>



export const signinInput = z.object({
    username: z.string().email(),
    password: z.string().min(6),

})

export type SigninInput = z.infer<typeof signinInput>


export const createBlogInput = z.object({
    title: z.string(),
    content: z.string(),

})
export type CreateBlogInput = z.infer<typeof createBlogInput>

export const updatePostInput = z.object({
    title: z.string().optional(),
    content: z.string().optional(),
});

export type UpdatePostType = z.infer<typeof updatePostInput>;
