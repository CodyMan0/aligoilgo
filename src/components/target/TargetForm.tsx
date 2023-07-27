import { useNavigate } from "react-router-dom";
import { calculatePercentage } from "../../utils/calculatePercentage";
import ProgressBar from "./animationBars/ProgressBar";
import { TargetType } from "../../types/TargetTypes";
import { OliBodyImage } from "../../utils/constant/image";

type PropsTargetType = Pick<
	TargetType,
	| "id"
	| "userId"
	| "goal"
	| "subGoalTotal"
	| "successCount"
	| "voteTotal"
	| "successVote"
>;

const TargetForm = ({
	id,
	goal,
	subGoalTotal,
	successCount,
	voteTotal,
	successVote,
}: PropsTargetType) => {
	const navigate = useNavigate();

	const successPercentage = calculatePercentage(successCount, subGoalTotal);
	const votePercentage = calculatePercentage(successVote, voteTotal);

	return (
		<>
			<div
				className="mt-10 p-6 min-w-full min-h-[200px] border-2 border-mainHover rounded-md cursor-pointer"
				onClick={() => {
					navigate(`${id}`);
				}}
			>
				<h2 className="font-bold text-2xl truncate">{goal}</h2>
				<div className="px-6 mb-6 desktop:p-2 flex items-center justify-center ">
					<div className="w-60 px-6 mb-6 ">
						<img src={OliBodyImage} alt="자그마한 로고 사진" />
					</div>
				</div>
				<div className="flex">
					<div className="flex flex-col w-1/2 p-2">
						<label className="mb-2  font-medium">성취률</label>
						<ProgressBar completed={successPercentage} />
					</div>
					<div className="flex flex-col w-1/2 p-2">
						<label className="mb-2  font-medium">성공 예측률</label>
						<ProgressBar completed={votePercentage} />
					</div>
				</div>
			</div>
		</>
	);
};
export default TargetForm;
