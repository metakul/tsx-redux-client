import { Link } from 'react-router-dom';
import { Card, Inset } from '@radix-ui/themes';
import blogData from './blogData.json';

const Blogs = () => {
  
  return (

    <div className="w-full overflow-hidden p-4">
      {blogData.map((post,index) => (
        <section  key={index} className="relative py-4 md:py-6">
          <Card>
            <Inset clip="padding-box" side="top" pb="current">
              <div className="flex flex-col rounded-2.5xl transition-shadow shadow-lg md:flex-row">
                <figure className="group  md:w-1/2 p-4">
                  <Link to={`/singleBlog/${post.id}`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-1/2 object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                    />
                  </Link>
                </figure>

                <div
                  className="rounded-b-[1.25rem] p-4 dark:bg-jacarta-700 md:w-1/2 md:rounded-none md:rounded-r-[1.25rem]"
                >
                  <div className="mb-3 flex flex-wrap items-center space-x-1 text-xs">
                    <a
                      href="#"
                      className="font-display text-jacarta-700 hover:text-accent dark:text-jacarta-200"
                    >
                      {post.author}
                    </a>
                    <span className="dark:text-jacarta-400">in</span>
                    <span className="inline-flex flex-wrap items-center space-x-1 text-accent">
                      {post.categories.map((category,index) => (
                        <a key={index} href="#">
                          {category}
                        </a>
                      ))}
                    </span>
                  </div>

                  <h2
                    className="mb-4 font-display text-xl text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent sm:text-3xl"
                  >
                    <Link to={`/singleBlog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="mb-8 dark:text-jacarta-200">{post.content}</p>

                  <div className="flex flex-wrap items-center space-x-2 text-sm text-jacarta-400">
                    <span>
                      <time dateTime={post.date}>{post.date}</time>
                    </span>
                    <span>•</span>
                    <span>3 min read</span>
                  </div>
                </div>
              </div>
            </Inset>
          </Card>
        </section>
      ))}

    </div>
  );
};

export default Blogs;