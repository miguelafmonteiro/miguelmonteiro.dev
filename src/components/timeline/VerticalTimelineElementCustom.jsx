import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

const VerticalTimelineElementCustom = ({
	background,
	textColor,
	arrowColor,
	date,
	icon,
	title,
	subtitle,
	content,
	icons,
	imageScale,
}) => {
	const dateComponent = (
		<span
			style={{ 
				fontSize: "25px",
				color: "white"
			}}
		>
			{date}	
		</span>
	);

  return (
		<VerticalTimelineElement
			contentStyle={{ 
				background: background,
				color: textColor,
				opacity: 1
			}}
			contentArrowStyle={{
				borderRight: '10px solid',
				color: arrowColor
			}}
			date={dateComponent}
			iconStyle={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				overflow: "hidden",
				background: "transparent",
				boxShadow: `0 0 0 2px ${arrowColor}`,
			}}
			intersectionObserverProps={{
				triggerOnce: false,
			}}
			icon={
				<img 
					src={icon} 
					className="w-16 h-16 object-cover" 
					style={{
						transform: `scale(${imageScale})`
					}}
				/>
			}
		>
			<h1 className="vertical-timeline-element-title font-bold">{title}</h1>
			<h3 className='text-base'>{subtitle}</h3>
			<p></p>
			<div className='text-xl text-justify'>{content}</div>
			<p></p>
			<motion.ul 
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="flex space-x-4 text-catppuccin-frappe-base"
			>
				{icons}
			</motion.ul>
		</VerticalTimelineElement>
  );
};

export default VerticalTimelineElementCustom;