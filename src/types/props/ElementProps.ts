export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string
  onClick?: () => void
  children?: React.ReactElement | string;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  className?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  children?: React.ReactElement | string;
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{
  className?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}
