import { FiAlignJustify } from "react-icons/fi";
import logo from "../../assets/logo/거북.jpeg";
import { useContext } from "react";
import Sidebar from "../layout/Sidebar";
import { ModalContext } from "../../context/ModalContext";

const Header = () => {
	const { isOpen, openModal } = useContext(ModalContext);
	const nickName = "이주영";

	return (
		<header className="flex py-6 justify-between items-center w-full">
			<div className="flex justify-center items-center gap-2">
				<FiAlignJustify
					className="text-2xl cursor-pointer"
					onClick={openModal}
				/>
				<img src={logo} alt="자그마한 로고 사진" className="w-12" />
			</div>
			<h1 className="font-semibold">안녕하세요 {nickName}님</h1>
			{isOpen && <Sidebar />}
		</header>
	);
};

export default Header;
