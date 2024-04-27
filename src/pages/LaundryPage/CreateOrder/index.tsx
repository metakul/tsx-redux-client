import { Box, Container, Typography } from '@mui/material'

function CreateLaundryOrder() {
  return (
    <Container className='container'>
      <Box sx={{ mt: 1 }}>
        <Typography variant='h3' sx={{
          mb: 4
        }}>
          Only for GBPIET Students.
          Launching Soon.
        </Typography></Box>
    </Container>
  )
}

export default CreateLaundryOrder