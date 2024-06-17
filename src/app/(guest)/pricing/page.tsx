import FreePrice from "./free/page";
import PremiumPrice from "./subscription/page";

export default async function Pricing() {

  return (
    <main className="flex max-w-7xl md:mx-auto flex-col md:flex-row justify-center items-center md:space-x-10 mt-10 space-y-10 md:space-y-0">
      <FreePrice />
      <PremiumPrice />
    </main>
  )
}
