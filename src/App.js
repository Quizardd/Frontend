import Exam from "./Assets/Exam.svg"
import Wizard from "./Assets/Wizard.gif"

function App() {
  return (
		<div className='h-full flex items-center justify-center'>
			<div className='h-3/5 w-full flex'>
				<div className='w-1/3 h-full'>
					<img src={Exam} />
				</div>
				<div className='w-2/5 h-full flex flex-col justify-center items-center pt-4'>
					<h1 className='text-center text-primaryBlue text-8xl tracking-wider font-bold'>
						QUIZARD
					</h1>
					<h1 className=' text-center font-semibold text-[#494554] text-lg'>
						Your witty wizard to create online quizes
					</h1>
	
					<a
						href='/login'
						className='w-fit py-3 px-16 mt-12 rounded-2xl text-white bg-[#D53CBB]'>
						Get Started
					</a>
				</div>
				<div className='w-1/3 h-full'>
					<img src={Wizard} />
				</div>
			</div>
		</div>
	);
}

export default App;
