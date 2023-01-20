import { Builder, BuilderComponent } from '@builder.io/react';

import Page from './Page.js'

const ErrorPage = ({ content, targetModel='page' }) => {
  return(
      <Page seo={{
          title: content?.data.title || '',
          description: content?.data.description || '',
          keywords: content?.data.keywords || '',
        }}>
          {(Builder.isEditing || Builder.isPreviewing) ? (
            <BuilderComponent
              model={targetModel}
              content={content}
              options={{ includeRefs: true }}
            />
          )
            : <h1>Not Found</h1> }
        </Page>
  )
}

export default ErrorPage;