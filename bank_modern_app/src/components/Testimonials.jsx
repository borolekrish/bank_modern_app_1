import { feedback } from "../constants";
import styles from "../style";
import Feedbackcard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue_gradient" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:md-16 md-6 relative z-[1]">
      <h1 className={styles.heading2}>What poeple are <br className="sm:block hidden" />saying about us</h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} max-w-[450px] text-left`}>Everything you need to accept card payment and grow your business anywhere on the planet.</p>
      </div>
    </div>
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <Feedbackcard key={card.id} {...card} />
      ))}
    </div>
  </section>
)

export default Testimonials