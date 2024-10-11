import * as React from "react"
import WhiteInternalLayout from "../components/white-internal-layout"

const NotFoundPage = () => (
  <WhiteInternalLayout title={"Sorry, page not found..."}>
    <section className="standard-internal">
      <div className="grid grid-cols-12 order-1">
        <div className="col-span-12 rich-text-editor">
          <h1>404: Not Found</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </div>
    </section>
  </WhiteInternalLayout>
)

export default NotFoundPage
