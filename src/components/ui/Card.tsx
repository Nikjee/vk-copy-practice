import { Box } from '@mui/system'
import React, { FC, PropsWithChildren } from 'react'

const Card: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Box
			sx={{
				border: '1px solid #e2e2e2',
				borderRadius: '10px',
				padding: 2,
				marginTop: 4,
			}}
		>
			{children}
		</Box>
	)
}

export default Card
