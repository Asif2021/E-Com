import {logout} from '../../actions/userController'
const page = () => {
  return (
    <div>
        <form action={logout}><button type='submit'>Logout</button></form>
        
    </div>
  )
}
export default page