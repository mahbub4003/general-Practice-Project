import { getComments } from "@/lib/post";

const Comments = async ({ id }) => {
  const comments = await getComments(id);
  return (
    <div>
      <h1 className=" text-center font-bold mt-8 text-lg">Comments</h1>
      <hr />
      {comments.map((comment) => {
        return (
          <p className=" m-8">
            <span className=" text-green-500 font-bold capitalize">
              {comment.name}
            </span>
            -{">"} {comment.body}
          </p>
        );
      })}
    </div>
  );
};

export default Comments;
