import Facebook from '../components/facebook'
import Instagram from '../components/instagram'
import Twitter from '../components/twitter'
import WhatsApp from '../components/whats-app'
import styles from '../styles/about.module.scss'

const socialNetworks = [
  { icon: Facebook, link: 'https://www.facebook.com' },
  { icon: Instagram, link: 'https://www.instagram.com' },
  { icon: Twitter, link: 'https://twitter.com' },
  { icon: WhatsApp, link: 'https://www.whatsapp.com' }
]

export default function About() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor neque vitae tempus quam pellentesque nec nam. Fringilla urna porttitor rhoncus dolor purus. Ultrices in iaculis nunc sed augue lacus viverra. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Viverra adipiscing at in tellus. Donec ultrices tincidunt arcu non sodales neque sodales. Lobortis feugiat vivamus at augue eget. Fermentum iaculis eu non diam phasellus. Quis risus sed vulputate odio ut enim blandit volutpat. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Orci phasellus egestas tellus rutrum tellus pellentesque eu.</p>
        <ul>
          {socialNetworks.map(({ icon: Icon, link }) => (
            <li key={link}>
              <a href={link} target='_blank'>
                <Icon/>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
