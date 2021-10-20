import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export const Card: React.FC<CardProps> = ({ children, className }) => {

  return (
    <div className={`shadow-lg rounded-xl w-full p-4 bg-white relative overflow-hidden ${className}`}>
      {children}
    </div>
  )
}