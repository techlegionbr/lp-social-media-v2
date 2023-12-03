
import { Icon } from "@/components/Icon"
import * as S from "../styles"

interface PostProps {
  post: {
    title: string,
    description: string,
    legend: string
  }
}

export const Post = ({ post: { description, legend, title } }: PostProps) => {
  const height = Math.floor(Math.random() * (401 - 300) + 300);
  return (
    <S.Post style={{ height }}>
      <div className="post-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="post-actions">
        <div className="controls-left">
          <button>
            <Icon className="icon" icon="mdi:heart" />
          </button>
          <button>
            <Icon className="icon" icon="majesticons:chat-line" />
          </button>
          <button>
            <Icon className="icon" icon="tabler:send" />
          </button>
        </div>
        <div className="controls-right">
          <button>
            <Icon className="icon" icon="mingcute:bookmark-line" />
          </button>
        </div>
      </div>
      <div className="post-comments">
        <span><strong>1M curtidas</strong></span>
        <span><a href="https://techlegion.com.br/" target="_blank"><strong>techlegion</strong></a> {legend}</span>
      </div>
    </S.Post>
  )
}