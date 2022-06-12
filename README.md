This is an assessment project, Only to whom it concerns.

# Skilled Tech Evaluation

Live preview -> https://skilledtech-test-redone.vercel.app/

## Keys

- `CT:` Completion Time
- `OCT:` Overall Completion Time
- `VSF:` View Source File

`OCT:` >=4.6h (including time spent to think of design but exluding 1h for preparing `README.md`)

## Project breakdown:-

### Pages

- [/posts](https://skilledtech-test-redone.vercel.app/posts "Posts page") for listing all posts and performing neccesary actions like `Delete`, `Edit`, and `Add new`

- [/posts/[id]](https://skilledtech-test.vercel.app/posts/1 "Edit post with id 1") for rendering the `PostForm` depending on the `query`. If the `id` is a `Number`, the post info with the particular `id` will be fetched for update else if the `id` has the value `'new'`, a new post will be created.

### Main Components

- `Post:` Features include
  - Deleting a posts. (Includes progress indicator)
  - Editing posts. (This will open `/posts/[id]` with the `id` of the post).
  - Creating a new post by clicking the `Create new` button
  - Main `sub-components` include
    - `AllPost:` For rendering all posts
    - `index:` For rendering a single post
  - [VSF](https://github.com/julius-ek-hub/skilledtech.test.redone/tree/main/components/Post "View Source File")
  - `CT:` >=40mins
- `Comment:` Renders comments for particular post.
  - Main `sub-components` include
    - `AllComments:` For rendering all comments
    - `index:` For rendering a single comment
  - [VSF](https://github.com/julius-ek-hub/skilledtech.test.redone/tree/main/components/Comment "View Source File")
  - `CT:` >=30mins
- `PostForm:` Renders the form used to create or update posts. The state of this form is entirely managed by `Formik`. Features include
  - Live validation
  - Updating or adding posts
  - Loading indicator when a post is being fetched from the backend during update or when the post is being sent to the backend.
  - [VSF](https://github.com/julius-ek-hub/skilledtech.test.redone/tree/main/components/PostForm "View Source File")
  - `CT:` >=20mins
- `LoadMore:` For fetching 10 more posts or comment.
  - [VSF](https://github.com/julius-ek-hub/skilledtech.test.redone/tree/main/components/LoadMore.jsx "View Source File").
  - `CT:` >=3mins
- `View:` A responsive component to properly place the child component(s) in the page. Used to render both `PostForm` and `AllPosts`. Can accept `onScrolledToBottom` prop as a function to be called when the view gets scrolled to the bottom end.
  - [VSF](https://github.com/julius-ek-hub/skilledtech.test.redone/tree/main/components/View.jsx "View Source File")
  - `CT:` >=10mins

### Hooks

- `usePost:` Holds the methods and states of `Post`. This hook is used as a value for `PostContext.Provider`.
  - [VSF](https://github.com/julius-ek-hub/skilledtech.test.redone/tree/main/hooks/usePost.js "View Source File").
  - `CT:` >=20min
- `usePostContext:` Makes the `usePost` hook available to all components within `Post` without having to include `React.useContext` and `PostContext` in each component.
  - [VSF](https://github.com/julius-ek-hub/skilledtech.test.redone/tree/main/hooks/usePostContext.js "View Source File").
  - `CT:` =>5min
- `usePostForm:` Holds the methods and states of `PostForm`.
  - [VSF](https://github.com/julius-ek-hub/skilledtech.test.redone/tree/main/hooks/usePostForm.js "View Source File").
  - `CT:` =>10min
- `usePostMenu:` Holds the methods and states of `Post/Menu`.
  - [VSF](https://github.com/julius-ek-hub/skilledtech.test.redone/tree/main/hooks/usePosMenu.js "View Source File").
  - `CT:` =>10min
- `useDimension:` Returns usefull screen details for layout of some `components`
  - [VSF](https://github.com/julius-ek-hub/skilledtech.test.redone/tree/main/hooks/useDimension.js "View Source File").
  - `CT:` =>7mins

### contexts

- `PostContext:` Provides the `usePost` hook to all components within `Post`.
  - [VSF](https://github.com/julius-ek-hub/skilledtech.test.redone/tree/main/contexts/PostContext.js "View Source File").
  - `CT:` =>1min

### CRUD handlers

- [VSF](https://github.com/julius-ek-hub/skilledtech.test.redone/tree/main/api/crud.js "View Source File")
- `CT:` =>10mins

### Api

- `getPost:` Gets a particular post, given `id`.
- `getPosts:` Gets all posts.
- `createPost:` Creates a new post, given `body`.
- `updatePost:` Updates (puts) an existing post, given `id` and new `body`.
- `deletePost:` Deletes a post, given `id`.
- `getComments:` Fetches 10 commenst, given `postId`.
- [VSF](https://github.com/julius-ek-hub/skilledtech.test.redone/tree/main/api/services.js "View Source File")
- `CT:` =>20mins

### Extra Dependencies

- [next](https://nextjs.org "Next JS") For routing
- [Formik](https://formik.org "Formik") for mentaining the state of `PostForm`
- [Yup](https://www.npmjs.com/package/yup "Yup") for creating validation schema for `PostForm`

### Disclaimer

- No SEO.
- No error logging service.
- Limited documentation comments

Deployed on [Vercel](https://vercel.com "Vercel")
