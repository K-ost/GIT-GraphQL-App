export type toastColorType = 'danger' | 'light'

export type CommentType = {
  id: string
  author: {
    avatarUrl: string
    login: string
  }
  bodyHTML: string
  createdAt: string
}

export type CommentTypeNode = {
  node: CommentType
}

export type IssueType = {
  id: string
  title: string
  bodyHTML: string
  number: number
  comments: {
    edges: CommentTypeNode[]
  }
}

export type IssueTypeNode = {
  node: IssueType
}

export type RepoType = {
  id: string
  name: string
}

export type RepoTypeNode = {
  node: RepoType
}

export type UserType = {
  id: string
  name: string
  avatarUrl: string
  bioHTML: string
  login: string
}


