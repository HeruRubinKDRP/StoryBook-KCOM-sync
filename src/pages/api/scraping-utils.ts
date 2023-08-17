 function getFullURL(base: string, urlSegment: string | null): string | null {
    if(!urlSegment) return null;
    if(urlSegment.startsWith('http')) return urlSegment; // if it's already an absolute URL
    return base + urlSegment;
}
