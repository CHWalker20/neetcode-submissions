class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
                if (s.length !== t.length) {
            return false;
        }
        let tS = t.split('');
        let sS = s.split('');
        let tSS = tS.sort().join();
        let sSS = sS.sort().join();
        console.log(tSS, sSS)

        return tSS == sSS;
    }
}
