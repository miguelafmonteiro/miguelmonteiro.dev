import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

const VerticalTimelineElementCustom = ({
	date,
	icon,
	title,
	titleUrl,
	subtitle,
	content,
	icons,
	imageScale,
	url,
	logoColor,
}) => {
  return (
		<VerticalTimelineElement
			contentStyle={{ 
				background: "var(--surface)",
				color: "var(--primary)",
				opacity: 0.9,
				marginLeft: icon ? undefined : "0px" ,
				marginBottom: "0px",
				boxShadow: "0 3px 0 var(--primary)"
			}}
			contentArrowStyle={{
				borderRight: `${icon ? "10px" : "0px"} solid`,
				color: "var(--surface)"
			}}
			date={date}
			iconStyle={{
				display: icon ? "flex" : "none",
				justifyContent: "center",
				alignItems: "center",
				overflow: "hidden",
				background: "transparent",
				boxShadow: `0 0 0 2px var(--primary)`,
			}}
			intersectionObserverProps={{
				triggerOnce: false,
			}}
			icon={
				<motion.a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					initial={{
						filter: `drop-shadow(0px 0px 0px)`,
						scale: 1
					}}
					whileHover={{
						filter: `drop-shadow(0px 0px 5px ${logoColor})`,
						opacity: 1,
						scale: 1.2,
					}}
					transition={{ duraton: 1 }}
					style={{
						cursor: "pointer"
					}}
				>
				<img
					src={icon}
					className="object-cover"
					style={{
						transform: `scale(${imageScale})`,
						backfaceVisibility: "hidden",
					}}
				/>
				</motion.a>
			}
		>
			<h1 className="text-xl font-bold">
				{title}
				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					className="relative cursor-pointer underline-animate"
				>
					{titleUrl}
				</a>
			</h1>
			<h3 className='text-xs'>{subtitle}</h3>
			<p></p>
			<div className='text-base text-justify'>{content}</div>
			<p></p>
			<motion.ul 
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="flex space-x-4 text-secondary"
			>
				{icons}
			</motion.ul>
		</VerticalTimelineElement>
  );
};

export default VerticalTimelineElementCustom;