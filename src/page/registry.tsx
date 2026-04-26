import { Button } from "@/components/ui/button"

const giveGift = (type: string) => () => {
    if(type === 'venmo') {
        window.open('https://account.venmo.com/u/kristine-rosette', '_blank')
        return;

    }

    if(type === 'paypal') {
        window.open('https://paypal.me/kristinerosette', '_blank')
        return;
    }
};

function Registry() {
    return <section id="registry">
        <div className="section-content section-grey preFadeIn">
            <div className="registry-title text-center mb-5 preFadeIn">
                <h1 className="pl-0 sm:pl-2 pr-0 sm:pr-2">Registry</h1>
            </div>
            <div className="registry-content text-center w-full sm:w-[70%] mb-5 preFadeIn">
                <h3 className="font-bold mb-5">Your presence is a gift</h3>
                <p className="mb-5">Having you in attendance is the greatest gift we could ask for. We are deeply grateful for the effort so many of you are making to be with us. In lieu of presents, we kindly ask that you simply come ready to celebrate.</p>
                <p className="mb-5">If you wish to honor us with a gift, please consider contributing to our newlywed fund, but do not feel obligated.</p>
            </div>
            <div className="registry-buttons text-center w-full sm:w-[60%] mb-5 flex flex-col sm:flex-row gap-5 preFadeIn">
                <Button size="lg" className="bg-[#008CFF] hover:bg-[#0077DB] venmo w-[40%] sm:w-[40%] ml-auto mr-auto sm:mr-5 text-lg font-bold" onClick={giveGift('venmo')}>Venmo</Button>
                <Button size="lg" className="bg-[#0079C1] hover:bg-[#0066A3] paypal w-[40%] sm:w-[40%] ml-auto mr-auto sm:ml-5 text-lg font-bold" onClick={giveGift('paypal')}>PayPal</Button>
            </div>
        </div>
    </section>
}

export default Registry;