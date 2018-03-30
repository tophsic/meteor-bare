
import './body.html'
import('./dynamic')
  .then(module => {
    module.default()
  })
  .catch(error => {
    console.error(error)
  })
