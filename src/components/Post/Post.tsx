import { Post as TPost } from '../../@types/post';
import './Post.scss';

type PostProps = {
  post: TPost;
};

function Post({ post }: PostProps) {
  return (
    <article className="post">
      <h2 className="post-title">{post.title}</h2>
      <div className="post-category">{post.category.name}</div>
      <p className="post-excerpt">{post.excerpt}</p>
    </article>
  );
}

export default Post;
