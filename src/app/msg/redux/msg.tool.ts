
export class MsgTool {

    static packMsg(content: string) {
        const now = new Date();
        return {
            id: now.getTime(),
            content: content,
            time: now.toLocaleString()
        };
    }
}
