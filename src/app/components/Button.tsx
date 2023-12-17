import Link from "next/link";

const Button = ({text, link}: {text: string; link: string}) => {
  return (
    <div>
      <Link className="btn" href={link}>
        {text}
      </Link>
    </div>
  )
}

export default Button
