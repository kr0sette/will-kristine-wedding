import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function UpdateSignup() {
    return (
        <div className="email-update-signup text-center pl-5 pr-5 max-w-3/4">
            <h3 className="font-bold pb-5">Want to stay in the loop?</h3>
            <div className="pb-5">Sign up to get updates on schedule, accommodations, travel tips, attire, and more as we get approaching the big day.</div>
            <div className="email-input flex flex-row max-w-3/4 mx-auto">
                <Input className="bg-white mr-2" type="email" placeholder="Email" />
                <Button className="bg-(--accent)">Sign up</Button>
            </div>
        </div>
    )
}

export default UpdateSignup;