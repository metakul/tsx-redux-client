import React from 'react';
import { useSelector } from 'react-redux';
import { BlogDetailsProps } from '../../interfaces/interface';
import { selectedBlogs } from '../../redux/slices/Blogs/BlogSlice';

const BlogDescription = ({ _id }: BlogDetailsProps) => {
  const blogsData = useSelector(selectedBlogs).blogs;
  const selectedBlog = blogsData.find((blog) => blog._id === _id);

  const parseHTML = (html: string) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return Array.from(tempDiv.childNodes);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderCustomStyles = (node: any, index: number) => {
    if (node.nodeType === 1) { // Node.ELEMENT_NODE
      switch (node.nodeName.toLowerCase()) {
        case 'b':
        case 'strong':
          return (
            <span key={index} className="font-bold underline" style={{ fontSize: '24px' }}>
            {Array.from(node.childNodes).map((childNode, idx) => renderCustomStyles(childNode, idx))}
          </span>
          );
        case 'a':
          return (
            <a key={index} className="font-bold underline" style={{ fontSize: '16px',color:"blue" }} href={node.getAttribute('href')} target="_blank" rel="noopener noreferrer">
              {Array.from(node.childNodes).map((childNode, idx) => renderCustomStyles(childNode, idx))}
            </a>
          );
        case 'img':
          return <img key={index} src={node.getAttribute('src')} alt={node.getAttribute('alt')} className="max-w-full" />;
        case 'i':
        case 'em':
          return <em key={index}>{Array.from(node.childNodes).map((childNode, idx) => renderCustomStyles(childNode, idx))}</em>;
        case 'ul':
          return <ul key={index} className="list-disc list-inside">{Array.from(node.childNodes).map((childNode, idx) => renderCustomStyles(childNode, idx))}</ul>;
        case 'li':
          return <li key={index} className="mb-2">{Array.from(node.childNodes).map((childNode, idx) => renderCustomStyles(childNode, idx))}</li>;
        case 'p':
          return <p key={index} className="mb-4">{Array.from(node.childNodes).map((childNode, idx) => renderCustomStyles(childNode, idx))}</p>;
        // Add additional cases for other HTML elements as needed
        default:
          return <React.Fragment key={index}>{Array.from(node.childNodes).map((childNode, idx) => renderCustomStyles(childNode, idx))}</React.Fragment>;
      }
    } else if (node.nodeType === 3) { // Node.TEXT_NODE
      const textContent = node.textContent || '';
      if (textContent.trim() === '') return null; // Ignore empty text nodes
      return handleSpecialCharacters(textContent);
    }
    return null;
  };

  const handleSpecialCharacters = (text: string) => {
    // Add logic to handle special characters like italics, etc.
    // For example:
    return text.replace(/_/g, ''); // Remove underscores (assuming underscores indicate italics)
  };

  const calculateReadingTime = (description: string) => {
    // Assuming an average reading speed of 200 words per minute
    const wordsPerMinute = 120;
    const words = description.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
  };

  return (
    <div className='px-8 mt-4'>
      {selectedBlog?.description && (
        <>
        <div>
        <div className="flex flex-wrap items-center space-x-2 text-md mb-2 text-jacarta-400">
                    <span>•</span>
                    <span>{calculateReadingTime(selectedBlog?.description)} min read</span>
                  </div>

          {parseHTML(selectedBlog.description).map((node, index) => renderCustomStyles(node, index))}
        </div>
        </>
      )}
                 
    </div>
  );
};

export default BlogDescription;
