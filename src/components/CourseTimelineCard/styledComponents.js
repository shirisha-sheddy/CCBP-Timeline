/* Write your CSS here */
import styled from 'styled-components/macro'

export const CourseTitleAndDurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`

export const CourseTitle = styled.h1`
  color: #171f46;
`

export const DurationContainer = styled.div`
  display: flex;
`

export const Duration = styled.p`
  color: #171f46;
`

export const CourseDescription = styled.p`
  color: #1e293b;
`

export const CourseTagsList = styled.ul`
  display: flex;
`

export const CourseTagItem = styled.li`
  list-style-type: none;
`
export const CourseTag = styled.p`
  color: #25262c;
`
