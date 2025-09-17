export default function Progress({ current, total }: { current: number, total: number }) {
    return (
        <p className="font-semibold">
            Question {current}/{total}
        </p>
    );
}
