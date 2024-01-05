'use client'
import Image from 'next/image';
import { primaryColor } from '@/components/constants/color';
import { LoadingOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter()
  setTimeout(()=>{
    router.push('/home')

  },1000)
  
  return (
    <main style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)', //align to the cente
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div>
        <LoadingOutlined style={{ fontSize: '50px', color: primaryColor }} />
      </div>
    </main>
  );
}
