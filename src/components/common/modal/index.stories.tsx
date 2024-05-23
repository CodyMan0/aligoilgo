import type { Meta, StoryObj } from '@storybook/react';
import { useRef } from 'react';

import useStateBoolean from '@/hooks/useStateBoolean';
import { default as Modal } from '.';
import Button from '../button/Button';

const meta = {
  title: 'Components/modal',
  component: Modal,
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
  render: () => {
    const ModalTestPage = () => {
      const { value: isOpen, on: open, off: close } = useStateBoolean(false);
      const backgroundRef = useRef<HTMLDivElement>(null);
      return (
        <div className="w-[410px] layout overflow-auto bg-gray-10 scroll-smooth flex flex-col gap-6">
          <div className="flex justify-center mt-10">
            <Button variant="secondary" onClick={open}>
              모달 열기
            </Button>
          </div>

          <Modal close={close} isOpen={isOpen}>
            <section className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-10  bg-[rgb(0 0 0 / 0.6)]">
              <div
                ref={backgroundRef}
                onClick={(e) => e.target === backgroundRef.current && close()}
              >
                콘텐츠
              </div>
              <Button>로그인하러 가기</Button>
            </section>
            {/* onClick={(e) => e.target === backgroundRef.current && close()}1 123 */}
          </Modal>
        </div>
      );
    };
    return <ModalTestPage />;
  },
};

//// const styles = {
//   container: css`
//     position: fixed;
//     top: 0;
//     left: 0;
//     z-index: 2;
//     width: 100%;
//     min-height: 100%;
//     background-color: rgb(0 0 0 / 0.6);
//   `,
//   content: css`
//     max-width: 600px;
//     margin: 0 auto;
//   `,
// };
