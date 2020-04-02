import React, { Component } from 'react';

import Data from './data/pages.json';

class Page extends Component {
  render() {
    let pathname = window.location.pathname,
        contentId = Data.pathname.indexOf(pathname),
        contentData = Data.content[contentId];
    
    if (contentData) {
        document.title = contentData.title;
        
        return (
            <div className="page">
                <h1 dangerouslySetInnerHTML={{__html: contentData.header}} />
                <div 
                    className="content" 
                    dangerouslySetInnerHTML={
                        {
                            __html: contentData.content
                        }
                    }
                />
            </div>
        );
    }

    return <span>Content not found</span>;
  }
}

export default Page;