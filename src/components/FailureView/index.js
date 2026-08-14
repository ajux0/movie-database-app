import {
  FailureContainer,
  FailureTitle,
  FailureDescription,
  RetryButton,
} from './styledComponents'

const FailureView = ({onRetry}) => (
  <FailureContainer>
    <FailureTitle>Something went wrong</FailureTitle>

    <FailureDescription>
      We could not load the movies. Please try again.
    </FailureDescription>

    <RetryButton type="button" onClick={onRetry}>
      Try Again
    </RetryButton>
  </FailureContainer>
)

export default FailureView
