import styles from "./Slider.module.css"

const Slider = () => {
  return (
    <section className={styles.slider}>
        <div className="container">
        <iframe
          width="100%"
          height="720"
          src="https://www.youtube.com/embed/WJThNmE_ehE"
          title="JW Marriott Bucharest Grand Hotel - Hotel Video Presentation"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        </div>
      </section>
  )
}

export default Slider