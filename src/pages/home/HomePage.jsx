import HomePageLayout from "../../layouts/HomePageLayout"
import MarkdownEditor from '../../components/markdown-editor/MarkdownEditor'

// * the homepage layout might be redundant after removal of a separate markdown preview element.
// TODO: deprecate in the future

const HomePage = () => {
  return (
    <div className="400px-custom:mx-[2%] sm:mx-[5%] lg:mx-[10%] 2xl:mx-[15%]">
      <HomePageLayout>
          <MarkdownEditor />
      </HomePageLayout>
    </div>
  )
}

export default HomePage