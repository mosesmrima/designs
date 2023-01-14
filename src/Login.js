import "./Login.css"

export default function Login() {
    return (
        <div className={"login-page"}>
           <div className={"login"}>
               <div className="flip-card">
                   <div className="flip-card-inner">
                       <div className="flip-card-front">
                           <p className="title">LOGIN</p>
                           <p></p>
                       </div>
                       <div className="flip-card-back">
                           <p className="title">BACK</p>
                           <p>Leave Me</p>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}