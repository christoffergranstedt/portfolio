import Image from 'next/image'

import { LayoutHeader } from '@components/LayoutHeader'
import { Card } from '@components/Card'
import { ItemsOverview } from '@components/ItemsOverview'
import { getAboutMe, getSkillBySkillGroup, getEducations } from '@lib/cosmicApi'
import { AboutMe } from '@/types/AboutMe'
import { Skill } from '@/types/Skill'
import { SkillGroup } from '@constants/SkillGroup'
import { Education } from '@/types/Education'
import smallProfileImage from 'public/profile-small.png'

interface AboutMeProps {
  aboutMe: AboutMe | null
  languageSkills: Skill[]
  javaScriptSkills: Skill[]
  databaseSkills: Skill[]
  cssSkills: Skill[]
  cmsSkills: Skill[]
  otherSkills: Skill[]
  educations: Education[]
}

export default function AboutMePage ({ aboutMe, languageSkills, javaScriptSkills, databaseSkills, cssSkills, cmsSkills, otherSkills, educations }: AboutMeProps) {
  return (
    <LayoutHeader headTitle="Christoffer Granstedt - About" headDescription="Information about Christoffer Granstedt, his technical skills and education.">
      <div className="mx-auto divide-y divide-gray-600 divide-opacity-25 pt-4 px-2 xl:w-3/4 text-xs sm:text-base">
        <h1 className="text-3xl sm:text-5xl text-black mb-8">about me</h1>
        <div className="lg:flex lg:flex-wrap mx-auto text-center">
          <div className="lg:w-3/4 mb-4 my-2 lg:self-center">
            <p className="text-left" dangerouslySetInnerHTML={{ __html: aboutMe ? aboutMe.content : '' }}/>
          </div>
          <div className="w-36 h-36 sm:w-44 sm:h-44 lg:h-64 lg:w-64 relative inline-block">
            <Image className="rounded-full" src={smallProfileImage} alt="A image of Christoffer Granstedt with no background" placeholder="blur" layout="fill" objectFit="contain"/>
          </div>
        </div>
        <div className="my-12">
          <h2 className="text-xl sm:text-3xl text-black my-4 w-full">skills</h2>
          <Card className="my-4">
            <ItemsOverview title="Programming languages" skills={languageSkills}/>
          </Card>
          <Card className="my-4">
            <ItemsOverview title="JavaScript" skills={javaScriptSkills}/>
          </Card>
          <Card className="my-4">
            <ItemsOverview title="Databases" skills={databaseSkills}/>
          </Card>
          <Card className="my-4">
            <ItemsOverview title="CSS" skills={cssSkills}/>
          </Card>
          <Card className="my-4">
            <ItemsOverview title="CMS" skills={cmsSkills}/>
          </Card>
          <Card className="my-4">
            <ItemsOverview title="Other" skills={otherSkills}/>
          </Card>
        </div>
        <div className="mb-12 mt-12">
        <h2 className="text-xl sm:text-3xl text-black my-4 w-full">education</h2>
          <Card className="my-4">
            <ItemsOverview educations={educations}/>
          </Card>
        </div>
      </div>
    </LayoutHeader>
  )
}

export async function getStaticProps() {
  const aboutMe = await getAboutMe()
  const languageSkills = await getSkillBySkillGroup(SkillGroup.Languages)
  const javaScriptSkills = await getSkillBySkillGroup(SkillGroup.JavaScript)
  const databaseSkills = await getSkillBySkillGroup(SkillGroup.Databases)
  const cssSkills = await getSkillBySkillGroup(SkillGroup.CSS)
  const cmsSkills = await getSkillBySkillGroup(SkillGroup.CMS)
  const otherSkills = await getSkillBySkillGroup(SkillGroup.Other)
  const educations = await getEducations()

  return {
    props: {
      aboutMe: aboutMe,
      languageSkills,
      javaScriptSkills,
      databaseSkills,
      cssSkills,
      cmsSkills,
      otherSkills,
      educations
    }
  }
}