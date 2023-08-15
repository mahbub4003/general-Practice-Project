import Author from "@/app/components/Author";
import Comments from "@/app/components/Comments";
import { getPost } from "@/lib/post";
import { getUsers } from "@/lib/users";
import { Suspense } from "react";

export default async function Page({ params }) {
  const id = params.id;
  const post = await getPost(id);

  return (
    <div>
      <div>
        <div className=" w-[90%]  m-auto mt-9 bg-slate-100 p-5">
          <h1 className=" uppercase text-center">{post.title}</h1>
          <h3 className=" capitalize">{post.body}</h3>
          <Suspense fallback="Author name Lodding....">
            <Author id={id} />
          </Suspense>
        </div>
        <Suspense fallback="Comments Lodding....">
          <Comments id={id} />
        </Suspense>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getUsers();

  return posts.map((post) => ({
    id: "" + post.id,
  }));
}
