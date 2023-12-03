
import { HomeSection } from "./sections/HomeSection"
import { ServiceSection } from "./sections/ServiceSection"
import { SocialMediaSection } from "./sections/SocialMediaSection"
import { TeamAndExpertiseSection } from "./sections/TeamAndExpertiseSection"
import { OnlinePresenceSection } from "./sections/OnlinePresenceSection"
import { Footer } from "@/components/Footer"
import { BeneftSection } from "./sections/BenefitSection"
import { PlanSection } from "./sections/PlanSection"



export const Lading = () => {
  return (
    <>
      {/* <Header /> */}
      <HomeSection />
      <ServiceSection />
      <SocialMediaSection />
      <TeamAndExpertiseSection />
      <OnlinePresenceSection />
      <BeneftSection />
      <PlanSection />
      <Footer />
    </>
  )
}

export default Lading