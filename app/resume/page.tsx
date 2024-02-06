import Education from '@/app/ui/resume/education'
import Experience from '@/app/ui/resume/experience'
import Awards from '@/app/ui/resume/awards'
import Recommendations from '@/app/ui/resume/recommendations'
import WidgetSkills from '@/app/ui/widgets/widget-skills'
import WidgetLanguages from '@/app/ui/widgets/widget-languages'
import WidgetReferences from '@/app/ui/widgets/widget-references'

export const metadata = {
  title: 'Resume - DevSpace',
  description: 'Page description',
}

export default function Resume() {
  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">

      { /* Middle area */}
      <div className="grow">
        <div className="max-w-[700px]">

          <section>
            {/* Page title */}
            <h1 className="h1 font-aspekta mb-12">My resume</h1>
            {/* Page content */}
            <div className="text-slate-500 dark:text-slate-400 space-y-12">

              <Education />
              <Experience />
              <Awards />
              <Recommendations />

            </div>
          </section>

        </div>
      </div>

      { /* Right sidebar */}
      <aside className="md:w-[240px] lg:w-[300px] shrink-0">
        <div className="space-y-6">

          <WidgetSkills />
          <WidgetLanguages />
          <WidgetReferences />

        </div>
      </aside>

    </div>
  )
}
