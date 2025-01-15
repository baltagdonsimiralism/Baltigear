import React from 'react';

const BlogPost = ({ title, content, author }) => {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p>{content}</p>
      <small>Written by {author}</small>
    </div>
  );
};

export default BlogPost;







import React from 'react';

const Blogger = ({ name, bio, posts }) => {
  return (
    <div className="blogger">
      <h1>{name}</h1>
      <p>{bio}</p>
      <h2>Posts</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogger;


define of progress of grosses 




import React from 'react';

const BlogPost = ({ title, content, author, date, categories, tags, comments }) => {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p>{content}</p>
      <small>Written by {author} on {new Date(date).toLocaleDateString()}</small>
      <div>
        <strong>Categories:</strong> {categories.join(', ')}
      </div>
      <div>
        <strong>Tags:</strong> {tags.join(', ')}
      </div>
      <div>
        <h3>Comments:</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <p>{comment.text}</p>
              <small>By {comment.author} on {new Date(comment.date).toLocaleDateString()}</small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Blogger = ({ name, bio, posts }) => {
  return (
    <div className="blogger">
      <h1>{name}</h1>
      <p>{bio}</p>
      <h2>Posts</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <BlogPost {...post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogger;




const blogPosts = [
  { title: 'First Post', content: 'This is the first post.', author: 'Author1', date: '2025-01-10' },
  { title: 'Second Post', content: 'This is the second post.', author: 'Author2', date: '2025-01-11' },
  // Add more posts as needed
];

// Function to migrate blog posts, for example, adding a unique ID and categories
const migrateBlogPosts = (posts) => {
  return posts.map((post, index) => ({
    id: index + 1,
    ...post,
    categories: ['General'], // Add default categories
    tags: [] // Add empty tags array
  }));
};

// Perform migration
const migratedPosts = migrateBlogPosts(blogPosts);
console.log(migratedPosts);
 