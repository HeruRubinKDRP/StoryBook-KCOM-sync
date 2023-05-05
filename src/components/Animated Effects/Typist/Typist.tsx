import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { TypistStyled } from './typist.styled'

export interface TypingEffectProps {
  message: string;
  speed?: speedType;
  showCursor?: boolean;
  classes?: string;
}

export type speedType = 'slow' | 'medium' | 'fast'

const TypingCursor = () => {
  return (
    <div
      style={{
        backgroundColor: 'black',
        width: 2,
        height: 12,
        marginLeft: 6,
        display: 'inline-block'
      }}
    />
  )
}

const TypingEffect: React.FC<TypingEffectProps> = (
  props: TypingEffectProps
) => {
  const textRefs = useRef<(HTMLSpanElement | null)[]>([])
  textRefs.current = new Array(props.message.length).fill(null)

  const speedValue = (value: speedType | undefined): number => {
    switch (value) {
      case 'slow':
        return 0.1
      case 'medium':
        return 0.02
      case 'fast':
        return 0.01
      default:
        return 0.01
    }
  }

  useEffect(() => {
    gsap.fromTo(
      textRefs.current,
      { autoAlpha: 0, y: 0, width: 0, display: 'none' },
      {
        width: 'auto',
        autoAlpha: 12,
        y: 0,
        display: 'inline',
        ease: 'none',
        stagger: speedValue(props.speed) // Adjust this value to change the typing speed
      }
    )
  }, [props.speed])

  return (
    <TypistStyled className={`${props.classes}`}>
      {props.message.split('').map((char, index) => (
        <span key={index} ref={(el) => (textRefs.current[index] = el)}>
          {char}
        </span>
      ))}
      {props.showCursor && <TypingCursor />}
    </TypistStyled>
  )
}

export default TypingEffect
