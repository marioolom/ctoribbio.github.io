
<?php
/**
 * This is the summary for a DocBlock.
 *
 * This is the description for a DocBlock. This text may contain
 * multiple lines and even some _markdown_.
 *
 * * Markdown style lists function too
 * * Just try this out once
 *
 * The section after the description contains the tags; which provide
 * structured meta-data concerning the given element.
 *
 * @author  Mike van Riel <me@mikevanriel.com>
 *
 * @since 1.0
 *
 * @param int    $example  This is an example function/method parameter description.
 * @param string $example2 This is a second example.
 */
class Customer
{
    private $firstName;
    private $firstName;

        
    /**
     * SetFirstName
     *
     * @param  mixed $newFirstName
     * @return void
     */
    public function SetFirstName($newFirstName)
    {
        if(empty($newFirstName))
        {
            return false;
        }
        else
        {
            $firstName = $newFirstname;
            return true;
        }

    }
}
?>